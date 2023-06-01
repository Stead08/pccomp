import Link from 'next/link';

const header = () => {
  return (
      <header className="bg-gray-400 p-2">
        <nav className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">自作PC構成 by Stead08 Early Alpha Version</h1>
          <ul className="flex items-center space-x-2">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default header;
