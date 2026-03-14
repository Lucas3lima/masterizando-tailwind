import { createFileRoute } from '@tanstack/react-router';
import { Earth, Mail } from 'lucide-react';
import * as FileInput from '../components/form/FileInput';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
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

      <Tabs defaultValue="my-details" className="mt-4 space-y-6">
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
                  type="email"
                ></InputGroupInput>
                <InputGroupAddon align={'inline-start'}>
                  <Mail className="w-5 h-5 text-zinc-500" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="grid grid-cols-form gap-3 pb-5">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-zinc-700"
              >
                Your photo
                <span className="text-sm mt-0.5 text-zinc-400 block">
                  This will be displayed on your profile.
                </span>
              </label>
              <FileInput.Root className="flex items-center gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
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
            <div className="grid grid-cols-form gap-3 pb-5">
              <label
                htmlFor="country"
                className="text-sm font-medium text-zinc-700"
              >
                Country
              </label>
              <Select>
                <SelectTrigger className="w-full flex  gap-4">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Countries</SelectLabel>
                    <SelectItem value="brasil">Brasil</SelectItem>
                    <SelectItem value="eua">Estados Unidos</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

                
            </div>
            <div className="grid grid-cols-form gap-3 pb-5">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-zinc-700"
              >
                Portfolio projects
                <span className="text-sm mt-0.5 text-zinc-400 block">
                  Share a few snippets of your work.
                </span>
              </label>
              <FileInput.Root className="flex items-center gap-5">
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="profile">Profile</TabsContent>
      </Tabs>
    </>
  );
}
