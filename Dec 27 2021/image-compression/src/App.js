import React from 'react';
import './App.css';
import imageCompression from 'browser-image-compression';
import { TextField, Typography } from '@mui/material';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.compressImage = this.compressImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      webWorker: {
        progress: null,
        inputSize: null,
        outputSize: null,
        inputUrl: null,
        outputUrl: null,
      },
      mainThread: {
        progress: null,
        inputSize: null,
        outputSize: null,
        inputUrl: null,
        outputUrl: null,
      },
    };
  }

  handleChange(target) {
    return (e) => {
      this.setState({ [target]: e.currentTarget.value });
    };
  }

  onProgress(p, useWebWorker) {
    const targetName = useWebWorker ? 'webWorker' : 'mainThread';
    this.setState((prevState) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        progress: p,
      },
    }));
  }

  async compressImage(event, useWebWorker) {
    const file = event.target.files[0];
    const targetName = useWebWorker ? 'webWorker' : 'mainThread';
    this.setState((prevState) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        inputSize: (file.size / 1024 / 1024).toFixed(2),
        inputUrl: URL.createObjectURL(file),
      },
    }));
    var options = {
      maxSizeMB: this.state.maxSizeMB,
      maxWidthOrHeight: this.state.maxWidthOrHeight,
      useWebWorker,
      onProgress: (p) => this.onProgress(p, useWebWorker),
    };
    const output = await imageCompression(file, options);
    this.setState((prevState) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        outputSize: (output.size / 1024 / 1024).toFixed(2),
        outputUrl: URL.createObjectURL(output),
      },
    }));
  }

  render() {
    const { webWorker, mainThread, maxSizeMB, maxWidthOrHeight } = this.state;
    return (
      <div className='App'>
        <div>
          <Typography color='textSecondary' style={{ marginBottom: '1rem' }}>
            Configurations:
          </Typography>
          <TextField
            label={'Max Size in MB'}
            type='number'
            id='maxSizeMB'
            name='maxSizeMB'
            onChange={this.handleChange('maxSizeMB')}
            style={{ marginRight: '1rem' }}
            value={maxSizeMB}
          />
          <TextField
            label={'Max Resolution'}
            type='number'
            id='maxWidthOrHeight'
            name='maxWidthOrHeight'
            onChange={this.handleChange('maxWidthOrHeight')}
            value={maxWidthOrHeight}
            style={{ marginBottom: '.5rem' }}
          />
        </div>
        <hr />
        <div style={{ marginTop: '1rem' }}>
          <label htmlFor='main-thread'>
            Upload Image:{' '}
            {mainThread.progress && <span>{mainThread.progress}%&emsp;</span>}
            <input
              id='main-thread'
              type='file'
              accept='image/*'
              onChange={(e) => this.compressImage(e, false)}
            />
          </label>
          <p>
            {mainThread.inputSize && (
              <span>Source image size: {mainThread.inputSize} MB</span>
            )}
            {mainThread.outputSize && (
              <span>, Output image size: {mainThread.outputSize} MB</span>
            )}
          </p>
        </div>
        {(mainThread.inputUrl || webWorker.inputUrl) && (
          <table>
            <thead>
              <tr>
                <td>Input</td>
                <td>Output</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={mainThread.inputUrl || webWorker.inputUrl}
                    alt='input'
                  />
                </td>
                <td>
                  <img
                    src={mainThread.outputUrl || webWorker.outputUrl}
                    alt='output'
                  />
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
