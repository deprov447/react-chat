import style from "./SearchItem.module.css";

const SearchItem = ({ name, msg, time, msgLeft }) => {
  return (
    <div className={style.SearchItem}>
      <div className={style.div12Parent}>
        <div className={style.div1}></div>
        <div className={style.div2}>
          <h5>{name}</h5>
          <div className={style.msgSummary}>{msg}</div>
        </div>
      </div>
      <div className={style.div3}>
        <div className={style.timeElapsed}>{time}</div>
        {msgLeft !== "0" ? (
          <div className={style.unreadMsg}>{msgLeft}</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
