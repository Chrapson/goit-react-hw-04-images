import { RevolvingDot } from 'react-loader-spinner';
import s from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={s.loader}>
      <RevolvingDot
        height="100"
        width="100"
        radius="20"
        color="#4fa94d"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
