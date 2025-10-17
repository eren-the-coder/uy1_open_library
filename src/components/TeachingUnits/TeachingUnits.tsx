import styles from './TeachingUnits.module.css';

const TeachingUnits = () => {
  const units = [
    "Inf111 - Algorithmique",
    "Inf121 - Programmation",
    "Math131 - Mathématiques discrètes",
    "Inf142 - Bases de données",
    "Inf152 - Systèmes d'exploitation"
  ];

  const handleUnitClick = (unit: string) => {
    console.log('Unité sélectionnée:', unit);
  };

  return (
    <section className={styles.teachingUnits}>
      <h2 className={styles.title}>Unités d'enseignement</h2>
      <div className={styles.list}>
        {units.map((unit, index) => (
          <div 
            key={index}
            className={styles.unitRow}
            onClick={() => handleUnitClick(unit)}
          >
            {unit}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeachingUnits;