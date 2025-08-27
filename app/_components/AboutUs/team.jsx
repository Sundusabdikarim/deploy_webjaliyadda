const Team = ({headline ,teams,}) => {
    return (
        <section className="Teams">
            <h5>
                Teams
                </h5>
            <div className="Team">
            {teams.map((team,index) => (
                <div key = {index} className="Team__Section">
                <Image src={team.featuredImage} width={500} height={500} />
            <p>{team.text}</p>
            <p>{team.textpr}</p>
            </div>
            ))}
            </div>
          
        </section>
    )
 
}

export default Team;