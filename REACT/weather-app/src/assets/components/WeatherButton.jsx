import { Button } from "react-bootstrap";

export function WeatherButton() {
  return (
    <>
      <div>
        <Button variant="warning">Current Location</Button>
        <Button variant="warning">paris</Button>
        <Button variant="warning">new york</Button>
      </div>
    </>
  );
}
