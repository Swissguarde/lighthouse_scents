import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Contact from "./contact";

export function Scents() {
  return (
    <Tabs defaultValue="account" className="w-full md:w-[800px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="afterlight">Afterlight</TabsTrigger>
        <TabsTrigger value="ember-luxe">Ember Luxe</TabsTrigger>
        <TabsTrigger value="amber-reign">Amber Reign</TabsTrigger>
      </TabsList>
      <TabsContent value="afterlight">
        <Card>
          <CardHeader>
            <CardTitle>Afterlight</CardTitle>
            <CardDescription>
              This mix stirs a powerful mix of warmth, nostalgia and
              invigoration. Stirring the feeling of soulful, warmth, sweet
              reflection and empowered calm.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="ember-luxe">
        <Card>
          <CardHeader>
            <CardTitle>Ember Luxe</CardTitle>
            <CardDescription>
              This scent stirs a feeling of elegant calm wrapped in desire.
              Perfect for introspection, slow evenings or self care rituals. A
              scent for the bold who crave calm.{" "}
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="amber-reign">
        <Card>
          <CardHeader>
            <CardTitle>Amber Reign</CardTitle>
            <CardDescription>
              This scent creates an emotion of luxurious seduction and fearless
              poise. It feels like walking into a room and owning it—magnetic
              energy wrapped in timeless warmth. A scent that commands
              attention, fierce, warm, and unforgettable. Confidence in every
              breath.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
