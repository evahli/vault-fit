import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export const InfoCard = ({stepNumber, desc}) => {
  return(
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{stepNumber}</CardTitle>
        <CardDescription>
          What to know before you com to our Gym
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
    </Card>
  )
}
