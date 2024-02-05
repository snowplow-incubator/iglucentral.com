import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const ShareIcon = (props: SvgIconProps) => (
  <SvgIcon
    {...props}
    fontSize={props.fontSize || 'inherit'}
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C16.7835 10 15.6938 9.45692 14.9601 8.59997L9.91933 11.1968C9.97222 11.4562 10 11.7249 10 12C10 12.2751 9.97222 12.5438 9.91933 12.8032L14.9601 15.4C15.6938 14.5431 16.7835 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 17.7249 14.0278 17.4562 14.0807 17.1968L9.03986 14.6C8.30623 15.4569 7.21654 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.21653 8 8.30623 8.54308 9.03986 9.40003L14.0807 6.80325C14.0278 6.54375 14 6.27512 14 6ZM7.8324 12.8027C7.82503 12.8156 7.8179 12.8287 7.81103 12.842C7.79586 12.8715 7.7823 12.9013 7.77031 12.9315C7.4353 13.5669 6.76823 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C6.76823 10 7.4353 10.4331 7.77031 11.0685C7.7823 11.0987 7.79586 11.1285 7.81103 11.158C7.8179 11.1713 7.82503 11.1844 7.8324 11.1973C7.94018 11.443 8 11.7145 8 12C8 12.2855 7.94018 12.557 7.8324 12.8027ZM16.1676 17.1973C16.0598 17.443 16 17.7145 16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.2318 16 16.5647 16.4331 16.2297 17.0685C16.2177 17.0987 16.2041 17.1285 16.189 17.158C16.1821 17.1713 16.175 17.1844 16.1676 17.1973ZM18 8C17.2318 8 16.5647 7.56685 16.2297 6.93146C16.2177 6.90132 16.2041 6.87148 16.189 6.84204C16.1821 6.82871 16.175 6.81559 16.1676 6.8027C16.0598 6.557 16 6.28549 16 6C16 4.89543 16.8954 4 18 4C19.1046 4 20 4.89543 20 6C20 7.10457 19.1046 8 18 8Z"
    />
  </SvgIcon>
)

export default ShareIcon
