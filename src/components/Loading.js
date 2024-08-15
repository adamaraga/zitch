import ReactLoading from "react-loading";

const Loading = ({ button }) => {
  return (
    <>
      {button ? (
        <ReactLoading color="#fff" width={30} height={30} type="spin" />
      ) : (
        <div className="loadingCon">
          <ReactLoading color="#00847b" width={50} height={50} type="spin" />
        </div>
      )}
    </>
  );
};

export default Loading;
