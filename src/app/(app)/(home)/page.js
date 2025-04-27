import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
    return (
    <>
        <div className="p-4">
            <div className="w-full max-w-[500px] flex flex-col gap-y-4">
                <p className="text-red-400">Fillout this form</p>
                <Form>
                    <Progress value={30}></Progress>
                    <Button variant='elevated'>I am a button</Button>
                    <Input type="text" placeholder="Enter your name"/>
                    <Textarea placeholder="message"></Textarea>
                    <Checkbox />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    </>
    );
}
