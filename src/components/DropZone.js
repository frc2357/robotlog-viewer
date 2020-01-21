import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function DropZone({ onLogSessionLoad }) {
  const readFile = (fileObject) => {
    const reader = new FileReader()

    // TODO: Handle errors better
    reader.onabort = () => console.err('file reading was aborted')
    reader.onerror = () => console.err('file reading has failed')
    reader.onload = () => {
      const logSession = JSON.parse(reader.result);
      onLogSessionLoad(logSession);
    }
    reader.readAsText(fileObject)
  };

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(readFile);
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop files!</p> :
          <p>Drag and drop log files here, or click to select a file.</p>
      }
    </div>
  )
}

export default DropZone;
