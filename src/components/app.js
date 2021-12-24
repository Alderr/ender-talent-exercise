import classnames from 'classnames';
import s from './app.module.scss';

import Header from 'components/Header/index';
import Properties from 'components/Properties/index';

const styles = classnames.bind(s);

function App() {
  return (
    <div className={styles(s.app)}>
        <Header />
        <Properties />
        {/* <LeasesTable selectedID /> */}
    </div>
  );
}

export default App;
