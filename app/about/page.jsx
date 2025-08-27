import { fetchAboutPage } from "@/utilis/starpi.utlis";
import AboutUs from "../_components/AboutUs/about";
import MissionVission from "../_components/AboutUs/MissionVission";
import Team from "../_components/AboutUs/team";

export default async function page() {
  const data  = await fetchAboutPage();
  
  const AboutUsData =data.find(
    (aboutus) => aboutus.IsHeroAbout
  );

const aboutSecondSec = data.filter(
  (about) => !about.IsHeroAbout && !about.IsTeam
);
const TeamSec = data.filter (
  (team) => !team.IsHeroAbout && !team.IsMissionVission
);
console.log(TeamSec)

  return (
    <main>
      <AboutUs data = {AboutUsData}/>
      <MissionVission data ={aboutSecondSec}/>
      <Team teams = {TeamSec}/>
    </main>
  );
}