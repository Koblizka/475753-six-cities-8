import LoaderSpinner from 'react-loader-spinner';

function Loader(): JSX.Element {
  return (
    <div style={ {margin: '0 auto'} }>
      <p className="visually-hidden">Loading</p>
      <LoaderSpinner
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
      />
    </div>
  );
}

export {Loader};
