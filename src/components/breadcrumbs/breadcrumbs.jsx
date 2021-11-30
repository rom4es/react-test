import './breadcrumbs.css';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <ul className="b-breadcrumbs">
      {breadcrumbs.map(({ breadcrumb }) => {
        return (
          <li>{breadcrumb}</li>
        )
      })}
    </ul>
  );
}

export default Breadcrumbs;