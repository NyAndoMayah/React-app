import './App.css';
import './scripts.js';
import { Tfoot } from './components/Tfoot.js';
import { Thead } from './components/Thead.js';
import { table } from './donneestable';
import { TableItem } from './components/TableItem';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <div class="sb-nav-fixed">
            <Navbar></Navbar>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                <Sidebar></Sidebar>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                            <h1 class="mt-4">Tables</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li class="breadcrumb-item active">Tables</li>
                            </ol>
                            <div class="card mb-4">
                                <div class="card-body">
                                    DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                    <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                    .
                                </div>
                            </div>
                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-table me-1"></i>
                                    DataTable Example
                                </div>
                                <div class="card-body">
                                    <table id="datatablesSimple" class="table table-bordered">
                                        <Thead />
                                        <Tfoot />
                                        <tbody>
                                            {table.map(item => (<TableItem {...item}></TableItem>))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer class="py-4 bg-light mt-auto">
                        <div class="container-fluid px-4">
                            <div class="d-flex align-items-center justify-content-between small">
                                <div class="text-muted">Copyright &copy; Your Website 2022</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>);
}
export default App;

