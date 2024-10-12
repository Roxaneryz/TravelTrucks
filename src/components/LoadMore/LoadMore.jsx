import css from "./LoadMore.module.css";

const LoadMore = ({ onLoadMore }) => {
  return (
    <button className={css.loadMore} onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default LoadMore;
