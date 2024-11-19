import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Lock, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Uncomment to show error state
      // setError('Invalid credentials');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="bg-teal-600 p-3 rounded-xl">
            <Activity className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
            <CardDescription>
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    placeholder="doctor@hospital.com"
                    type="email"
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              
              {error && (
                <div className="text-sm text-red-500 text-center">{error}</div>
              )}
              
              <Button
                type="submit"
                className={cn(
                  "w-full bg-teal-600 hover:bg-teal-700",
                  isLoading && "opacity-70 cursor-not-allowed"
                )}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="text-center text-sm">
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  Forgot your password?
                </a>
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-600 mt-4">
          Need an account?{' '}
          <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;