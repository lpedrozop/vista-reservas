import "../../styles/calendario/storyline.css";
import TimeLine from "./TimeLine";

function Storyline() {
  const dataUserAssistant = [
    {
      imageUrl:
        "https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg",
      name: "Jose M",
    },
    {
      imageUrl: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
      name: "Lucas M",
    },
    {
      imageUrl:
        "https://media.tycsports.com/files/2023/10/07/628008/jude-bellingham_862x485_wmk.webp?v=1",
      name: "Michael C",
    },
  ];
  return (
    <div className="story-line">
      <div className="head-story">
        {dataUserAssistant.map((user) => (
          <div key={user.name} className="profile-user-story">
            <p>{user.name}</p>
            <img className="user-story" src={user.imageUrl} alt={user.name} />
          </div>
        ))}
      </div>
      <TimeLine />
    </div>
  );
}

export default Storyline;
