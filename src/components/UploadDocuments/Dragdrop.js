import React, { useRef, useState } from "react";
import "./Upload.scss"

export default function Upload() {
  const [files, setFiles] = useState(null)
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.click()
  }

  const removeFile = (name) => {
    const newFiles = files.filter((file) => file.name !== name)
    setFiles(newFiles)
  }

  const preventBubbling = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div className="Upload" css={CSS}>
      <div className="inner">
        <div className="list">
          <h5>Your Files:</h5>

          {files && (
            <ul className="files">
              {files.map((file, i) => (
                <li key={file.name}>
                  {i + 1}. {file.name}
                  <span onClick={() => removeFile(file.name)}>
                    <i className="fa fa-times">X</i>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className="form"
          onDragEnter={preventBubbling}
          onDragOver={preventBubbling}
          onDrop={(e) => {
            preventBubbling(e)
            setFiles(Array.from(e.dataTransfer.files))
          }}
        >
          <i className="fa fa-cloud-upload fa-4x"></i>
          <p>Drag and drop files or select files below.</p>

          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={(e) => setFiles(Array.from(e.target.files))}
          />
          <button onClick={handleClick}>Choose Files</button>
        </div>
      </div>
    </div>
  )
}

