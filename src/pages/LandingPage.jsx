import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Bienvenido a IAprendix</h1>
        <p className="mt-4 text-lg text-gray-700">Tu plataforma para aprender inteligencia artificial de manera fácil y efectiva.</p>
      </header>
      <main className="flex flex-col items-center">
        <section className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h2 className="text-2xl font-semibold text-gray-800">¿Qué es IAprendix?</h2>
          <p className="mt-4 text-gray-600">
            IAprendix es una plataforma educativa dedicada a ofrecer cursos y recursos sobre inteligencia artificial. Nuestro objetivo es proporcionar materiales de alta calidad que sean accesibles para todos.
          </p>
        </section>
        <section className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Nuestros Cursos</h2>
          <p className="mt-4 text-gray-600">
            Ofrecemos una variedad de cursos que cubren desde los conceptos básicos hasta técnicas avanzadas en inteligencia artificial. Únete a nosotros y comienza tu viaje en el mundo de la IA.
          </p>
        </section>
        <button 
          className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleLoginClick}
        >
          Iniciar Sesión
        </button>
      </main>
      <footer className="mt-12 text-center text-gray-600">
        &copy; 2024 IAprendix. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default LandingPage;
