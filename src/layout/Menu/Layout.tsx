import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps) => {
    return <div className={styles.layout}>{children}</div>;
};

export default Layout;