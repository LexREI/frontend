import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';

function Actions() {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <aside className="h-screen max-w-[300px]">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div
            className={`overflow-hidden transition-all ${
              expanded ? 'w-32' : 'w-0'
            }`}
          >
            Discovery
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <ArrowBackIosNewRoundedIcon />
            ) : (
              <ArrowForwardIosRoundedIcon />
            )}
          </button>
        </div>

        <div>
          <Tabs defaultValue="account" onClick={() => setExpanded(true)}>
            <TabsList
              className={`grid ${
                expanded ? 'w-full grid-cols-4' : 'h-full grid-rows-4'
              }`}
            >
              <TabsTrigger
                value="account"
                onClick={() => setExpanded(true)}
                className="hover:bg-white"
              >
                {expanded ? 'Upload' : <DriveFolderUploadRoundedIcon />}
              </TabsTrigger>
              <TabsTrigger
                value="password"
                onClick={() => setExpanded(true)}
                className="hover:bg-white"
              >
                {expanded ? 'Download' : <DownloadRoundedIcon />}
              </TabsTrigger>
              <TabsTrigger
                value="account1"
                onClick={() => setExpanded(true)}
                className="hover:bg-white"
              >
                {expanded ? 'Attach' : <AttachFileRoundedIcon />}
              </TabsTrigger>
              <TabsTrigger
                value="account2"
                onClick={() => setExpanded(true)}
                className="hover:bg-white"
              >
                {expanded ? 'Lists' : <FormatListBulletedRoundedIcon />}
              </TabsTrigger>
            </TabsList>
            {expanded && (
              <>
                <TabsContent value="account">
                  <Card className="border-0 shadow-none">
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here. Click save when
                        you're done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Pedro Duarte" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@peduarte" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here. After saving, you'll be
                        logged out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </>
            )}
          </Tabs>
        </div>
      </nav>
    </aside>
  );
}

export default Actions;
