import style from "./SearchItem.module.css";

const SearchItem = () => {
  return (
    <div className={style.SearchItem}>
      <div className={style.div12Parent}>
        <div className={style.div1}></div>
        <div className={style.div2}>
          <h5>Ester Howard</h5>
          <div className={style.msgSummary}>Ofcourse I can</div>
        </div>
      </div>
      <div className={style.div3}>
        <div className={style.timeElapsed}>1 min</div>
        <div className={style.unreadMsg}>2</div>
      </div>
    </div>
  );
};

export default SearchItem;
