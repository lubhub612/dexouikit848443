import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 110.6 110.6" {...props}>
      <title>Logo</title>
      <defs>
        <image
          width="110.6"
          height="110.6"
          id="img1"
          href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDExMC42IDExMC42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTAuNiAxMTAuNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzJfKTt9Cgkuc3Qye2ZpbGw6dXJsKCNTVkdJRF8zXyk7fQoJLnN0M3tmaWxsOnVybCgjU1ZHSURfNF8pO30KPC9zdHlsZT4KPGc+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjU2LjM3NjkiIHkxPSIxMTIuODEyMSIgeDI9IjIxLjEwNjkiIHkyPSI0NC4wMzcxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTEyLjY0NTYpIj4KCQk8c3RvcCAgb2Zmc2V0PSIxLjAwMDAwMGUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiMwOTk3RDUiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMzM1NkQxIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc3LjgsMTUuOGMtMy4yLTEuNC02LjktMS4yLTkuOSwwLjZMNDkuNCwyNy4xbC0zLjUsMmwtMTIuNiw3LjNjLTAuMiwwLjEtMC40LDAuMy0wLjYsMC40CgkJYy0zLDItNC45LDUuNC00LjksOS4xdjE5LjdjMCwxLjcsMC41LDMuNCwxLjQsNC45bDAuMSwwLjJjMC44LDEuMywxLjgsMi4zLDMuMSwzLjFsLTkuMywxNS41TDE5LjIsODdsLTMuNy0yLjEKCQljLTMuNi0yLjEtNS44LTUuOS01LjgtMTBWMzUuOGMwLTQuMSwyLjItNy45LDUuOC0xMGwxMi40LTcuMUw0OS40LDYuMmMzLjYtMi4xLDgtMi4xLDExLjYsMGwzLjcsMi4xbDQuMSwyLjRsMC4zLDAuMkw3Ny44LDE1Ljh6IgoJCS8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM2Ljg1IiB5MT0iMjYuNDkxNCIgeDI9Ijg2LjkwMDEiIHkyPSI2OS42NDY0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTEyLjY0NTYpIj4KCQk8c3RvcCAgb2Zmc2V0PSIxLjAwMDAwMGUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzU2RDEiLz4KCQk8c3RvcCAgb2Zmc2V0PSIwLjIiIHN0eWxlPSJzdG9wLWNvbG9yOiM0MDQxRDAiLz4KCQk8c3RvcCAgb2Zmc2V0PSIwLjUyIiBzdHlsZT0ic3RvcC1jb2xvcjojNTQyNENFIi8+CgkJPHN0b3AgIG9mZnNldD0iMC44IiBzdHlsZT0ic3RvcC1jb2xvcjojNjAxMUNDIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzY0MEJDQyIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04Mi43LDQ1LjF2MTkuN2MwLDMuNC0xLjYsNi42LTQuMiw4LjZjLTAuMiwwLjEtMC40LDAuMy0wLjYsMC40cy0wLjQsMC4zLTAuNiwwLjRsLTE2LjEsOS4zTDQyLjcsOTQuMgoJCWMtMy4yLDEuOC03LDItMTAuMywwLjRjLTAuMy0wLjEtMC41LTAuMy0wLjgtMC40bC0yLjUtMS40TDI3LjksOTJsLTQuOC0yLjhsOS4zLTE1LjVjMi4xLDEuMyw0LjYsMS43LDcuMSwxLjJsMC4xLDAKCQljMC45LTAuMiwxLjgtMC42LDIuNi0xbDMuOC0yLjJsMTMuMy03LjdjMy40LTEuOSw1LjQtNS41LDUuNC05LjRWMzlsMy44LTIuMmMwLjgtMC41LDEuNy0wLjgsMi42LTFjMCwwLDAuMSwwLDAuMSwwCgkJYzMuOS0xLDgsMC44LDEwLjEsNC4yYzAsMC4xLDAuMSwwLjEsMC4xLDAuMkM4Mi4zLDQxLjcsODIuNyw0My40LDgyLjcsNDUuMXoiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTI5MjUuNzU4MSIgeTE9IjMyNzEuOTI5OSIgeDI9Ii0yOTYxLjAyODEiIHkyPSIzMjAzLjE1OTkiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgLTI4NzEuNTMgLTMxNjEuMTc1OCkiPgoJCTxzdG9wICBvZmZzZXQ9IjEuMDAwMDAwZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6IzA5OTdENSIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzU2RDEiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzIuOCw5NC44YzMuMiwxLjQsNi45LDEuMSw5LjktMC42bDE4LjUtMTAuN2wzLjUtMmwxMi42LTcuM2MwLjItMC4xLDAuNC0wLjMsMC42LTAuNGMzLTIsNC44LTUuNCw0LjgtOVY0NS4xCgkJYzAtMS43LTAuNS0zLjQtMS40LTQuOUw4MS4zLDQwYy0wLjgtMS4zLTEuOC0yLjMtMy4xLTMuMWw5LjMtMTUuNmwzLjgsMi4ybDMuNywyLjFjMy42LDIuMSw1LjgsNS45LDUuOCwxMHYzOS4xCgkJYzAsNC4xLTIuMiw3LjktNS44LDEwTDgyLjcsOTJsLTIxLjUsMTIuNGMtMy42LDIuMS04LDIuMS0xMS42LDBsLTMuNy0yLjFsLTQuMS0yLjRsLTAuMy0wLjJMMzIuOCw5NC44eiIvPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF80XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMjk0NS4yODc2IiB5MT0iMzE4NS42MDk2IiB4Mj0iLTI4OTUuMjMyNCIgeTI9IjMyMjguNzY5NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAtMjg3MS41MyAtMzE2MS4xNzU4KSI+CgkJPHN0b3AgIG9mZnNldD0iMS4wMDAwMDBlLTAyIiBzdHlsZT0ic3RvcC1jb2xvcjojMzM1NkQxIi8+CgkJPHN0b3AgIG9mZnNldD0iMC4yIiBzdHlsZT0ic3RvcC1jb2xvcjojNDA0MUQwIi8+CgkJPHN0b3AgIG9mZnNldD0iMC41MiIgc3R5bGU9InN0b3AtY29sb3I6IzU0MjRDRSIvPgoJCTxzdG9wICBvZmZzZXQ9IjAuOCIgc3R5bGU9InN0b3AtY29sb3I6IzYwMTFDQyIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NDBCQ0MiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjcuOSw2NS41VjQ1LjhjMC0zLjQsMS42LTYuNiw0LjItOC42YzAuMi0wLjEsMC40LTAuMywwLjYtMC40czAuNC0wLjMsMC42LTAuNGwxNi4xLTkuM2wxOC41LTEwLjcKCQljMy4yLTEuOCw3LTIsMTAuMy0wLjRjMC4zLDAuMSwwLjUsMC4zLDAuOCwwLjRsMi41LDEuNGwxLjIsMC43bDQuOCwyLjhsLTkuMywxNS41Yy0yLjEtMS4zLTQuNi0xLjctNy0xLjFsLTAuMSwwCgkJYy0wLjksMC4yLTEuOCwwLjYtMi42LDFMNjQuNiwzOWwtMTMuMyw3LjdDNDgsNDguNiw0Niw1Mi4yLDQ2LDU2djE1LjVsLTMuOCwyLjJjLTAuOCwwLjUtMS43LDAuOC0yLjYsMWwtMC4xLDAKCQljLTMuOSwxLTgtMC44LTEwLjEtNC4yYzAsMC0wLjEtMC4xLTAuMS0wLjJDMjguNCw2OC45LDI3LjksNjcuMiwyNy45LDY1LjV6Ii8+CjwvZz4KPC9zdmc+Cg=="
        />
      </defs>
      <style></style>
      <use id="Logo" href="#img1" transform="matrix(1,0,0,1,0,0)" />
    </Svg>
  );
};

export default Icon;