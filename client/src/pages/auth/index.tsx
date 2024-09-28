import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const AuthPage = () => {
    return (
        <div>
            <Register />
            <Login />
        </div>
    )
}

const Register = () => {
    return (
        <div className="mx-auto max-w-md space-y-6 pt-5">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Register</h1>
                <p className="text-muted-foreground">Create your account to get started.</p>
            </div>
            <Card>
                <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Enter a password" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">
                        Register
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

const Login = () => {
    return (
        <div>
            Login
        </div>
    )
}