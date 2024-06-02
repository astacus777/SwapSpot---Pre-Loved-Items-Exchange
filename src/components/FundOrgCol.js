import React, {useState} from "react";
import '../scss/FundOrgCol.scss';
import imageSrc from "../assets/Decoration.svg";
import { foundationsData, organisationsData, collectionsData } from '../data/fundOrgColData';

const FundOrgCol = () => {
    const [currentView, setCurrentView] = useState('foundations');
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;
    const showContent = (view) => {
        setCurrentView(view);
        setCurrentPage(1);
    }
    const getDataForCurrentView = () => {
        switch (currentView) {
            case 'foundations':
                return foundationsData;
            case 'organisations':
                return organisationsData;
            case 'collections':
                return collectionsData;
            default:
                return [];
        }
    };

    const text1= "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";
    const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
    const text3 = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

    const data = getDataForCurrentView();
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div className="fund-container" id="fund-org-col">
            <p className="fund-header">Komu pomagamy?</p>
            <img className="decoration-img" src={imageSrc} alt="decoration" />

            <div className="fund-three-btn">
                <button
                    className={`fund-btn ${currentView === 'foundations' ? 'active' : ''}`}
                    onClick={() => showContent('foundations')}
                >
                    Fundacjom
                </button>
                <button
                    className={`fund-btn ${currentView === 'organisations' ? 'active' : ''}`}
                    onClick={() => showContent('organisations')}
                >
                    Organizacjom pozarządowym
                </button>
                <button
                    className={`fund-btn ${currentView === 'collections' ? 'active' : ''}`}
                    onClick={() => showContent('collections')}
                >
                    Lokalnym zbiórkom
                </button>

            </div>
            <div className="center-container">
                <div className="fund-content-text">
                    {currentView === 'foundations' && <p className="fund-content-para">{text1}</p>}
                    {currentView === 'organisations' && <p className="fund-content-para">{text2}</p>}
                    {currentView === 'collections' && <p className="fund-content-para">{text3}</p>}
                </div>
            </div>


            <div className="fund-content">
                {currentItems.map((item) => (
                    <div className={`fund-content-info ${item.id % 3 !== 0 ? 'additional-class' : ''}`} key={item.id}>
                      <div className="fund-content-list">
                        <p key={item.id}>{item.name}</p>
                        <p>{item.text}</p>
                      </div>
                      <div className="fund-content-details">
                        <p>{item.info}</p>
                      </div>
                    </div>
                ))}
                <div className="pagination">
                    {totalPages > 1 && Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default FundOrgCol;


