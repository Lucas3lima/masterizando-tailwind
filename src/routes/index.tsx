import { createFileRoute } from '@tanstack/react-router';
import { Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../components/ui/input-group';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <Tabs defaultValue="overview" className="mt-4 space-y-6">
        <TabsList variant="line">
          <TabsTrigger
            value="my-details"
            className=" hover:text-violet-700 data-active:text-violet-700 data-active:after:bg-violet-600"
          >
            My details
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className=" hover:text-violet-700 data-active:text-violet-700 data-active:after:bg-violet-600"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className=" hover:text-violet-700 data-active:text-violet-700 data-active:after:bg-violet-600"
          >
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="my-details" className="flex flex-col">
          <div className="flex items-center border-b border-zinc-200 pb-5">
            <div className="flex flex-col flex-1">
              <h2 className="text-lg font-semibold">Personal info</h2>
              <span className="text-sm text-zinc-500">
                Update your photo and personal details here.
              </span>
            </div>
            <div className="space-x-3">
              <Button variant={'outline'}>Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-800" form="settings">
                Save
              </Button>
            </div>
          </div>
          <form
            id="settings"
            action=""
            className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
          >
            <div className="grid grid-cols-form gap-3 pb-5">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-zinc-700"
              >
                Name
              </label>
              <div className="grid grid-cols-2 gap-6">
                <Input id="firstName" defaultValue="Lucas" />
                <Input defaultValue="Lima" />
              </div>
            </div>
            <div className="grid grid-cols-form gap-3 pb-5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-700"
              >
                Email address
              </label>
              <InputGroup>
                <InputGroupInput
                  id="email"
                  defaultValue="lucaslima.code@gmail.com"
                  placeholder="email"
                  type='email'
                ></InputGroupInput>
                <InputGroupAddon align={'inline-start'}>
                  <Mail className="w-5 h-5 text-zinc-500" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="grid grid-cols-form gap-3 pb-5">
              <label
                htmlFor="x"
                className="text-sm font-medium text-zinc-700"
              >
                Your photo
                <span className='text-sm mt-0.5 text-zinc-400 block'>This will be displayed on your profile.</span>
              </label>
              <div>
                
              </div>
            </div>
            <div className="grid grid-cols-form gap-3 pb-5">
              <label
                htmlFor="role"
                className="text-sm font-medium text-zinc-700"
              >
                Role
              </label>
              <InputGroup>
                <InputGroupInput
                  id="role"
                  defaultValue="Product Designer"
                  placeholder="role"
                ></InputGroupInput>
                <InputGroupAddon align={'inline-start'}>
                  <Mail className="w-5 h-5 text-zinc-500" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            
          </form>
        </TabsContent>

        <TabsContent value="profile">Profile</TabsContent>
      </Tabs>
    </>
  );
}
