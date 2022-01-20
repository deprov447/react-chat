import SearchItem from "./SearchItem";
import styles from "./SearchList.module.css";

const SearchList = () => {
  const m = [
    {
      name: "Esther Howard",
      msg: "Of course I can...",
      time: "1 min",
      msgLeft: "0",
    },
    {
      name: "Albert Flores",
      msg: "That's great!!!",
      time: "1 min",
      msgLeft: "2",
    },
    {
      name: "Marvin McKinney",
      msg: "Hello world",
      time: "2 min",
      msgLeft: "4",
    },
    {
      name: "Kathryn Murphy",
      msg: "Lemme know",
      time: "7 Days",
      msgLeft: "0",
    },
    {
      name: "Floyd Miles",
      msg: "Of course I can...",
      time: "5 Week",
      msgLeft: "0",
    },
  ];
  return (
    <div className={styles.SearchList}>
      {m.map(({ name, msg, time, msgLeft }) => (
        <SearchItem name={name} msg={msg} time={time} msgLeft={msgLeft} />
      ))}
    </div>
  );
};

export default SearchList;
