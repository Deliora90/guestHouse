export interface IMenu {
  path: string;
  label: string;
  Component: React.FC;
  exact: boolean;
  inNavbar: boolean;
}
