const Footer = ({ currentPage, navigate }) => {
    // Navigasi Item Reusable (NavItem)
    const NavItem = ({ page, label, icon }) => (
        <button
            onClick={() => navigate(page)}
            className={`flex flex-col items-center p-2 rounded-xl text-xs font-medium transition duration-200 ${
                currentPage === page ? 'text-blue-600 bg-blue-100 shadow-inner' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
            }`}
        >
            <span className="text-xl">{icon}</span>
            <span className="hidden sm:inline">{label}</span>
        </button>
    );

    // NavigationBar
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-10">
            <div className="max-w-4xl mx-auto flex justify-around p-3">
                <NavItem page="home" label="Beranda" icon="🏠" />
                <NavItem page="form" label="Form Baru" icon="📝" />
                <NavItem page="list" label="Daftar Surat" icon="📋" />
                <NavItem page="about" label="Tentang" icon="ℹ️" />
            </div>
        </nav>
    );
};