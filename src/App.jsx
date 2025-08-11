import React from "react"
import Prof from "./components/Profilecard"
import profiles from "./mockdb1/profile"


const App = () => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "2rem",
    }

  };

  return (
    <>
    <div className="container">
      <h1>Applicants CV</h1>
      <div style={styles.grid}>
        {profiles.map ((profile) => (
          <Prof name={profile.name} degree={profile.degree} jobDesc={profile.jobDescription} status={profile.status} img={profile.image} />
        ))}
      </div>
    </div>
    </>
  )
}


export default App
