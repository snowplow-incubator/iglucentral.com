import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const EyeIcon = (props: SvgIconProps) => (
  <SvgIcon
    {...props}
    fontSize={props.fontSize || 'inherit'}
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4C16.2909 4 19.8627 6.4287 22.6646 11.154L22.8844 11.5329L22.9302 11.6328L22.9591 11.716L22.9736 11.7706L22.988 11.853L22.999 11.9535L22.9982 12.0639L22.9849 12.1744C22.9784 12.2112 22.9698 12.2477 22.9591 12.284L22.9203 12.3916L22.8844 12.4671L22.8682 12.4962C20.1039 17.3334 16.5685 19.8773 12.3127 19.9957L12 20C7.6044 20 3.96348 17.4514 1.13177 12.4962C0.956077 12.1887 0.956077 11.8113 1.13177 11.5038C3.96348 6.54862 7.6044 4 12 4ZM12 6C8.59033 6 5.69918 7.89478 3.27859 11.8059L3.161 12L3.27859 12.1941C5.63002 15.9935 8.42551 17.8901 11.709 17.9954L12 18C15.4097 18 18.3008 16.1052 20.7214 12.1941L20.838 12L20.7214 11.8059C18.37 8.00652 15.5745 6.10992 12.291 6.00464L12 6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11Z"
    />
  </SvgIcon>
)

export default EyeIcon