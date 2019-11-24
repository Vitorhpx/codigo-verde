import React from "react";

const SvgLogo = (props: any) => (
  <svg viewBox={"0 0 128 128"} fill="none" {...props}>
    <path fill="#000" d="M16 27h3v52h-3zM22 27h3v52h-3zM99 27h3v52h-3z" />
    <path fill="#000" d="M99 27h5v52h-5zM28 27h3v36h-3z" />
    <path fill="#000" d="M28 27h11v36H28zM44 27h3v36h-3zM51 27h11v36H51z" />
    <path fill="#000" d="M59 27h3v36h-3zM67 27h3v36h-3zM75 27h11v36H75z" />
    <path fill="#000" d="M83 27h3v36h-3zM91 27h3v36h-3zM107 27h3v52h-3z" />
    <rect x={8} y={45} width={111} height={3} rx={1} fill="#2E7D32" />
    <path
      d="M30.679 96.01c-.147 1.347-.63 2.379-1.45 3.093-.815.715-1.902 1.073-3.261 1.073-.95 0-1.79-.237-2.523-.712-.726-.475-1.289-1.146-1.687-2.013-.399-.873-.6-1.869-.607-2.988v-1.661c0-1.137.2-2.145.598-3.024.399-.879.97-1.555 1.714-2.03.75-.48 1.611-.72 2.584-.72 1.371 0 2.452.371 3.243 1.116.797.738 1.26 1.76 1.389 3.067h-1.09c-.27-2.174-1.45-3.26-3.542-3.26-1.16 0-2.086.433-2.777 1.3-.686.867-1.029 2.065-1.029 3.595v1.564c0 1.477.334 2.654 1.002 3.533.674.88 1.582 1.319 2.725 1.319 1.13 0 1.983-.27 2.557-.809.575-.545.93-1.36 1.064-2.443h1.09zm.302-.906c0-.914.175-1.737.527-2.47.357-.732.858-1.3 1.503-1.704.65-.41 1.386-.616 2.206-.616 1.265 0 2.29.446 3.076 1.336.785.885 1.178 2.06 1.178 3.525v.22c0 .92-.179 1.749-.536 2.487-.352.732-.85 1.298-1.495 1.696-.644.399-1.38.598-2.206.598-1.26 0-2.285-.443-3.076-1.327-.785-.891-1.178-2.069-1.178-3.534v-.21zm1.054.29c0 1.137.293 2.072.88 2.804.59.727 1.364 1.09 2.32 1.09.949 0 1.716-.363 2.302-1.09.592-.732.888-1.696.888-2.891v-.203c0-.726-.135-1.391-.404-1.995-.27-.603-.648-1.069-1.134-1.397a2.879 2.879 0 00-1.67-.501c-.938 0-1.702.37-2.294 1.107-.592.733-.888 1.694-.888 2.883v.194zm4.228-8.894h1.274l-2.03 2.46h-.923l1.679-2.46zm3.465 8.657c0-1.476.329-2.651.985-3.524.662-.88 1.559-1.319 2.69-1.319 1.282 0 2.261.507 2.935 1.521V86.5h1.046V100h-.985l-.044-1.266c-.673.961-1.664 1.442-2.97 1.442-1.096 0-1.98-.44-2.654-1.319-.669-.884-1.003-2.077-1.003-3.577v-.123zm1.064.185c0 1.213.243 2.17.73 2.874.486.697 1.171 1.046 2.056 1.046 1.295 0 2.215-.572 2.76-1.714v-4.465c-.545-1.236-1.46-1.855-2.742-1.855-.885 0-1.573.35-2.066 1.046-.492.692-.738 1.714-.738 3.068zM49.83 100h-1.055v-9.51h1.055V100zm-1.24-12.26c0-.2.065-.367.194-.502.13-.14.305-.21.528-.21.222 0 .398.07.527.21a.68.68 0 01.202.501.68.68 0 01-.202.501c-.129.135-.305.202-.527.202-.223 0-.399-.067-.528-.202a.696.696 0 01-.193-.5zm2.183 7.417c0-1.488.329-2.666.985-3.533.662-.873 1.558-1.31 2.69-1.31 1.294 0 2.279.516 2.952 1.547l.053-1.37h.984v9.316c0 1.224-.342 2.194-1.028 2.909-.685.715-1.614 1.072-2.786 1.072a4.222 4.222 0 01-1.898-.448c-.598-.293-1.07-.686-1.415-1.178l.588-.633c.745.914 1.63 1.371 2.655 1.371.879 0 1.564-.26 2.056-.782.493-.515.747-1.233.765-2.153v-1.196c-.674.938-1.655 1.407-2.944 1.407-1.102 0-1.987-.44-2.655-1.319-.668-.879-1.002-2.065-1.002-3.56v-.14zm1.064.185c0 1.213.243 2.17.73 2.874.486.697 1.171 1.046 2.056 1.046 1.295 0 2.212-.58 2.751-1.74V93.1c-.246-.61-.6-1.073-1.064-1.39-.462-.321-1.019-.483-1.67-.483-.884 0-1.573.35-2.065 1.046-.492.692-.738 1.714-.738 3.068zm7.263-.237c0-.915.175-1.738.527-2.47.357-.733.858-1.301 1.503-1.705.65-.41 1.386-.616 2.206-.616 1.266 0 2.291.446 3.076 1.336.785.885 1.178 2.06 1.178 3.525v.22c0 .92-.179 1.749-.536 2.487-.352.732-.85 1.298-1.494 1.696-.645.399-1.38.598-2.207.598-1.26 0-2.285-.443-3.076-1.327-.785-.891-1.177-2.069-1.177-3.534v-.21zm1.054.29c0 1.136.293 2.07.88 2.803.591.727 1.364 1.09 2.32 1.09.949 0 1.716-.363 2.302-1.09.592-.732.888-1.696.888-2.891v-.203c0-.726-.135-1.391-.404-1.995-.27-.603-.648-1.069-1.134-1.397a2.88 2.88 0 00-1.67-.501c-.938 0-1.702.37-2.294 1.107-.592.733-.888 1.694-.888 2.883v.194zm15.097 3.023l.07.272.08-.272 4.025-11.215h1.186L75.85 100H74.81l-4.763-12.797h1.178l4.025 11.215zm8.8 1.758a4.15 4.15 0 01-2.197-.598 4.089 4.089 0 01-1.52-1.661c-.363-.715-.545-1.515-.545-2.4v-.377c0-.914.176-1.738.527-2.47.358-.733.853-1.307 1.486-1.723a3.635 3.635 0 012.056-.633c1.155 0 2.069.396 2.743 1.187.68.785 1.02 1.86 1.02 3.226v.588h-6.786v.203c0 1.078.308 1.977.923 2.698.62.715 1.4 1.072 2.338 1.072.562 0 1.057-.102 1.485-.307.434-.206.826-.534 1.178-.985l.659.501c-.774 1.12-1.896 1.679-3.366 1.679zm-.193-8.965c-.79 0-1.459.29-2.004.87-.539.58-.867 1.36-.984 2.338h5.704v-.114c-.03-.914-.29-1.659-.782-2.233-.492-.574-1.137-.861-1.934-.861zm8.704.176a3.93 3.93 0 00-.711-.062c-.657 0-1.213.185-1.67.554-.451.363-.774.893-.967 1.59V100h-1.046v-9.51h1.028l.018 1.512c.556-1.125 1.45-1.688 2.68-1.688.293 0 .525.039.695.115l-.026.958zm-.427 3.77c0-1.476.328-2.651.984-3.524.662-.88 1.559-1.319 2.69-1.319 1.283 0 2.261.507 2.935 1.521V86.5h1.046V100h-.984l-.044-1.266c-.674.961-1.664 1.442-2.971 1.442-1.096 0-1.98-.44-2.654-1.319-.668-.884-1.002-2.077-1.002-3.577v-.123zm1.063.185c0 1.213.243 2.17.73 2.874.486.697 1.172 1.046 2.056 1.046 1.295 0 2.215-.572 2.76-1.714v-4.465c-.545-1.236-1.459-1.855-2.742-1.855-.885 0-1.573.35-2.066 1.046-.492.692-.738 1.714-.738 3.068zm11.543 4.834a4.15 4.15 0 01-2.197-.598 4.098 4.098 0 01-1.521-1.661c-.363-.715-.544-1.515-.544-2.4v-.377c0-.914.175-1.738.527-2.47.357-.733.852-1.307 1.485-1.723a3.638 3.638 0 012.057-.633c1.154 0 2.068.396 2.742 1.187.68.785 1.02 1.86 1.02 3.226v.588h-6.786v.203c0 1.078.308 1.977.923 2.698.621.715 1.401 1.072 2.338 1.072.563 0 1.058-.102 1.486-.307.433-.206.826-.534 1.177-.985l.659.501c-.773 1.12-1.895 1.679-3.366 1.679zm-.193-8.965c-.791 0-1.459.29-2.004.87-.539.58-.867 1.36-.984 2.338h5.704v-.114c-.03-.914-.29-1.659-.783-2.233-.492-.574-1.136-.861-1.933-.861z"
      fill="#2E7D32"
    />
  </svg>
);

export default SvgLogo;
