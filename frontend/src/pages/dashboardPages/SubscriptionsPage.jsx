import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTags, 
  faPlus, 
  faFilter, 
  faCalendar, 
  faDownload, 
  faPrint,
  faTimes,
  faCamera,
  faMicrophone
} from '@fortawesome/free-solid-svg-icons';
import Wrapper from '../../assets/wrappers/SubscriptionPage.styles'; // Assurez-vous que le chemin est correct

function SubscriptionPage() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <Wrapper>
      <header className="header">
        <span className="title">Abonnements</span>
        <div className="actions">
          <button className="btn">
            <FontAwesomeIcon icon={faTags} /> Gérer les étiquettes
          </button>
          <button className="btn" onClick={handleOpenForm}>
            <FontAwesomeIcon icon={faPlus} /> Ajouter un abonnement
          </button>
        </div>
      </header>

      <div className="secondary-actions">
        <button className="btn filter-btn" onClick={() => setFilterVisible(!filterVisible)}>
          <FontAwesomeIcon icon={faFilter} /> Filtre
        </button>

        {filterVisible && (
          <div className="filter-menu">
            <div className="filter-option">ID d’abonnement</div>
            <div className="filter-option">Titre</div>
            <div className="filter-option">Type</div>
            <div className="filter-option">Client</div>
            <div className="filter-option">Première date de facturation</div>
            <div className="filter-option">Prochaine date de facturation</div>
            <div className="filter-option">Répétez l’opération tous les</div>
            <div className="filter-option">Cycles</div>
            <div className="filter-option">Statut</div>
            <div className="filter-option">Quantité</div>
          </div>
        )}

        <div className="dropdown-group">
          <div className="dropdown">
            <button className="dropdown-btn">Monnaie</button>
            <div className="dropdown-menu">
              <div>USD</div>
              <div>EURO</div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-btn">Type de répétition</button>
            <div className="dropdown-menu">
              <div>Jour</div>
              <div>Semaine</div>
              <div>Mois</div>
              <div>Année</div>
            </div>
          </div>

          <div className="date-selector">
            <FontAwesomeIcon icon={faCalendar} />
            <span>Prochaine date de facturation</span>
            <div className="date-dropdown">
              <div>Demain</div>
              <div>7 prochains jours</div>
              <div>Ce mois-ci</div>
              <div>Cette année</div>
              <div>L’année prochaine</div>
            </div>
          </div>
        </div>

        <div className="actions-right">
          <button className="btn">
            <FontAwesomeIcon icon={faDownload} /> Exporter
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faPrint} /> Imprimer
          </button>
          <input type="text" className="search" placeholder="Recherche..." />
        </div>
      </div>

      {formVisible && (
        <div className="form-overlay">
          <div className="form-container">
            <header className="form-header">
              <span>Ajouter un abonnement</span>
              <button className="close-btn" onClick={handleCloseForm} aria-label="Fermer le formulaire">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </header>
            <div className="form-body">
              <div className="form-row">
                <label htmlFor="title">Titre</label>
                <input id="title" type="text" placeholder="Titre" />
              </div>
              <div className="form-row">
                <label htmlFor="startDate">Première date de facturation</label>
                <input id="startDate" type="date" />
              </div>
              <div className="form-row">
                <label htmlFor="client">Client</label>
                <select id="client">
                  <option>Client 1</option>
                  <option>Client 2</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="tax">TAXE</label>
                <select id="tax">
                  <option>Impôt 10%</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="secondTax">Deuxième IMPÔT</label>
                <select id="secondTax">
                  <option>Impôt 10%</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="repetitionType">Type de répétition</label>
                <input id="repetitionType" type="number" placeholder="Nombre positif" />
                <select id="repetitionFrequency">
                  <option>Jour</option>
                  <option>Semaine</option>
                  <option>Mois</option>
                  <option>Année</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="note">Note</label>
                <textarea id="note" placeholder="Note"></textarea>
              </div>
              <div className="form-row">
                <label htmlFor="tags">Étiquettes</label>
                <input id="tags" type="text" placeholder="Étiquettes" />
              </div>
            </div>
            <footer className="form-buttons">
              <button>
                <FontAwesomeIcon icon={faCamera} /> Télécharger des fichiers
              </button>
              <button>
                <FontAwesomeIcon icon={faMicrophone} /> Microphone
              </button>
              <button onClick={handleCloseForm} aria-label="Fermer le formulaire">
                <FontAwesomeIcon icon={faTimes} /> Fermer
              </button>
              <button>Sauvegarder</button>
            </footer>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default SubscriptionPage;
