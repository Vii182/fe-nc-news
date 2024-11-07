const ErrorPage = ({ errorCode }) => {
  // <<<<< ERROR IMAGES >>>>> -----
  const errorImages = {
    404: "https://httpgoats.com/404.jpg",
    400: "https://httpgoats.com/400.jpg",
    500: "https://httpgoats.com/500.jpg",
  };

  // <<<<< IMAGE AND MESSAGE ASSIGNMENT >>>>> -----
  const errorImage = errorImages[errorCode] || errorImages[500];
  const errorMessage =
    errorCode === 404
      ? "Page Not Found - Please Return"
      : errorCode === 400
      ? "Bad Request - Please Return"
      : "SomeThing Went Wrong - Please Return";

  // <<<<< MAIN RETURN >>>>> -----
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center pt-5 pb-5">
      <img
        src={errorImage}
        alt={`Error ${errorCode} Image`}
        className="max-w-5xl w-3/4 h-auto mb-4 border-4 border-orange-500"
      />
      <h1 className="text-5xl font-bold text-orange-700 mb-2">
        Error: {errorCode}
      </h1>
      <p className="text-2xl text-gray-400">{errorMessage}</p>
      <p className="mt-4 text-gray-500">
        Please Return to the previous Page or check the URL.
      </p>
    </div>
  );
};

export default ErrorPage;
