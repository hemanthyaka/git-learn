import { useState } from "react";
import print_icon from "./assets/Images/Frame 2.svg";
import doc_icon from "./assets/Images/Frame 3.svg";
import vector_icon from './assets/Images/Vector-1.svg'
import ChatBot from "./Chatbot";
import './App.css'

const Data = [
  {
    ApartmentName: "Lodha Towers",
    id: 1,
    Area: "KPHB",
    Time: "16:00",
    Day: "Monday",
  },
  {
    ApartmentName: "Lodha Towers",
    id: 2,
    Area: "KPHB",
    Time: "16:00",
    Day: "Monday",
  },
  {
    ApartmentName: "Lodha Towers",
    id: 3,
    Area: "KPHB",
    Time: "16:00",
    Day: "Monday",
  },
  {
    ApartmentName: "Lodha Towers",
    id: 4,
    Area: "KPHB",
    Time: "16:00",
    Day: "Monday",
  },
];

const Tags = [
  {
    id: 1,
    Icon: "🏢",
    Name: "Apartment",
  },
  {
    id: 2,
    Icon: "🏠",
    Name: "Villa",
  },
  {
    id: 3,
    Icon: "💵",
    Name: "2.5Cr",
  },
  {
    id: 4,
    Icon: "📍",
    Name: "Ameerpet",
  },
];

const Notes = [
  {
    id: 1,
    Image:
      "https://pbs.twimg.com/profile_images/681369932207013888/CHESpTzF.jpg",
    Name: "You",
    Des: "The individual appears to be a prospective buyer, but may require some encouragement based on the information provided in the chart. With a slight nudge, I believe he has the potential to become a committed buyer.",
    Time: "14:00-Aug,2024",
  },
  {
    id: 2,
    Image: "https://wallpaperaccess.com/full/2562973.jpg",
    Name: "David Killer",
    Des: "The individual does not seem to be a prospective buyer and appears quite firm in their decision. Based on the information provided in the chart, they are unlikely to be swayed, and additional encouragement may not change their stance.",
    Time: "14:00-Aug,2024",
  },
];

const Profile = () => {
  const [activeVisit, setActiveVisit] = useState(null); // State to track the active visit
  const [newMessage, setNewMessage] = useState('');


  const customStyles = {
    width: {
      watch: "100%",
      mobile: "100%",
      tablet: "100%",
      laptop: "100%",
    },
  };

  return (
    <div
      className="client-profile w-full  min-h-[100vh] h-[100vh] bg-white px-[13px] py-[8px]"
      style={customStyles}
    >
      <div className="flex items-center justify-between border-b-2 pb-2">
        <h2 className="font-bold">Client Profile</h2>
        <button>
          <i className="fa-solid fa-x text-[12px]"></i>
        </button>
      </div>

      <div className="client-profile-inner-div  w-full min-h-[500px] h-[650px] overflow-auto custom-scrollbar flex flex-col-reverse mobile:flex-row justify-between pt-2">
        <div className="chat w-full mobile:w-1/2  laptop:pr-2 mobile:pr-1 ">
          <center>
            <h2 className="pt-2">Chat</h2>
          </center>
          <div className="chatting w-full pt-14 mobile:pr-4">
            <ChatBot />
          </div>
        </div>

        <div className="details w-full min-h-[600px] h-[480px]  overflow-auto custom-scrollbar mobile:w-1/2  mobile:border-l-2 watch:border-b-2 mobile:border-b-0 watch:pt-2 mobile:ps-3 tablet:ps-6 laptop:ps-8">
          <div className="image-name-section w-full h-[50px] flex justify-between">
            <div className="image-name-mobile flex">
              <img
                src="https://preview.redd.it/n5wttlrfz7k51.jpg?auto=webp&s=82e59c3b12060f4f20b7d44a85b4cd8b1462d76f"
                className="rounded-full w-10"
                alt="profile-photo"
              />
              <div className="name-mobile-section pl-3">
                <h3 className="font-bold">Priyanka Singh</h3>
                <h3 className="text-sm text-[#0FA4B5]">8341434767</h3>
              </div>
            </div>

            <div className="flex " >
              <img src={print_icon} alt="" className="mr-4 w-10 cursor-pointer" />
              <img src={doc_icon} alt="" className="w-10 cursor-pointer" />
            </div>
          </div>

          <div className="badge mt-3">
            <span className="inline-flex items-center rounded-lg bg-[#D4E5E4] px-2 py-1 text-xs text-[#008080] font-bold">
              <span className="w-2 h-2 bg-[#008080] rounded-full inline-block mr-1"></span>
              High
            </span>
          </div>

          <div className="client-id-status-joined-date mt-4 text-sm">
            <div className="client-id flex justify-between pb-2">
              <p className="text-zinc-400">Client ID</p>
              <h3 className="font-bold">CLID-001456</h3>
            </div>
            <div className="client-status flex justify-between pb-2">
              <p className="text-zinc-400">Status</p>
              <h3 className="font-bold">Booked Visit</h3>
            </div>
            <div className="client-joined-date flex justify-between pb-2">
              <p className="text-zinc-400">Joined Date</p>
              <h3 className="font-bold">24 Aug, 2024 - 05:32PM</h3>
            </div>
          </div>

          {/* Display Scheduled Visits */}
          <div className="scheduled-visits mt-2">
            <h2 className="font-bold text-sm ">Scheduled Visits:</h2>
            <div className="list-data mt-2 flex justify-between flex-wrap">
              {Data.map((visit) => (
                <div
                  key={visit.id}
                  onClick={() => setActiveVisit(visit.id)} // Set the clicked visit as active
                  className={`visit-item p-2 pr-24 mb-2 rounded-lg cursor-pointer ${
                    activeVisit === visit.id
                      ? "bg-[#E5FFEE] border-2 border-[#89D5A2]"
                      : "bg-gray-100"
                  }`}
                >
                  <h4 className="font-bold">
                    📍 {visit.ApartmentName}, {visit.Area}
                  </h4>
                  <p className="text-sm text-zinc-600 ps-6">
                    {visit.Day}, {visit.Time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="Tags border-b-2 pb-4">
            <h3 className="font-bold text-sm mb-1">Tags: </h3>
            <div className="flex flex-wrap ">
              {Tags.map((tag) => (
                <div className="Apartments mr-1 mt-1" key={tag.id}>
                  <span className="inline-flex items-center rounded-md bg-[#EBEBF3] px-2 py-[8px] text-xs font-bold text-black ring-1 ring-inset ring-[#D6E2F1]">
                    {" "}
                    <span className="pr-2">{tag.Icon}</span> {tag.Name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="Notes">
            <center>
              <h2 className="font-bold mt-3">Notes</h2>
            </center>
            <div>
              {Notes.map((note) => (
                <div key={note.id} className="flex mt-3">
                  <img
                    src={note.Image}
                    alt=""
                    className="w-10 h-10 rounded-lg mr-3"
                  />
                  <div>
                    <h2
                      className={`font-bold ${
                        note.Name === "You" ? "text-[#0FA4B5]" : "text-black"
                      }`}
                    >
                      {note.Name}
                      <span className="text-xs ml-2 font-normal text-[#727E82]">
                        {note.Time}
                      </span>
                    </h2>
                    <p className="text-sm text-start text-[#727E82] laptop:pr-4">{note.Des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="input-label relative watch:mb-2 mb-0 ">
            <textarea
              placeholder="Add notes in here"
              className="small-placeholder relative border-2 rounded-lg border-[#7D8B8C] focus:outline-none w-full mt-10 ps-4 pt-2 resize-none"
              rows="3"
              value={newMessage}
              onChange={(e)=>{setNewMessage(e.target.value)}}></textarea>
            <button>
              <img src={vector_icon} alt="" className="absolute top-[90px] right-3 cursor-pointer " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
