// components/AddPostForm.js
import { useState } from 'react';
import styles from './AddPostForm.module.css';

const AddPostForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: '',
    file: null
  });

  const [fileName, setFileName] = useState('');

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      setFileName(file.name);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.currentTarget.style.borderColor = 'var(--primary)';
    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
  };

  const handleDragLeave = (e: any) => {
    e.currentTarget.style.borderColor = 'var(--border)';
    e.currentTarget.style.background = 'var(--accent)';
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      setFileName(file.name);
    }
    handleDragLeave(e);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    setFormData({ name: '', description: '', type: '', file: null });
    setFileName('');
  };

  const handleReset = () => {
    setFormData({ name: '', description: '', type: '', file: null });
    setFileName('');
  };

  return (
    <section className={styles.addPostForm}>
      <h2 className={styles.title}>Ajouter une ressource</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="doc-name">
            Nom du document
          </label>
          <input
            className={styles.input}
            type="text"
            id="doc-name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ex: Cours d'algorithmique"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="doc-description">
            Description
          </label>
          <textarea
            className={styles.textarea}
            id="doc-description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Décrivez brièvement le document..."
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="doc-type">
            Type de document
          </label>
          <select
            className={styles.input}
            id="doc-type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          >
            <option value="">Sélectionnez un type</option>
            <option value="cours">Cours</option>
            <option value="td">TD</option>
            <option value="tp">TP</option>
            <option value="comm">Communiqué</option>
          </select>
        </div>
        
        <div className={styles.fileGroup}>
          <label className={styles.label}>Fichier</label>
          <div 
            className={styles.fileInput}
            onClick={() => document.getElementById('doc-file')?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <span>{fileName || 'Glissez-déposez ou cliquez pour sélectionner'}</span>
            <input 
              type="file" 
              id="doc-file" 
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </div>
        
        <div className={styles.formActions}>
          <button className={`btn ${styles.resetBtn}`} type="button" onClick={handleReset}>
            Effacer
          </button>
          <button className={`btn ${styles.submitBtn}`} type="submit">
            Ajouter
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddPostForm;