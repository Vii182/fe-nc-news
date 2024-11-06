import LoginForm from "../components/users-components/Login";

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Login
        </h2>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
