import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DrawerClose } from "@/components/ui/drawer";

type UserFormProps = {
  className?: string;
  // 他のpropsもここに追加します
};

export function UserForm({ className }: UserFormProps) {
  return (
    <form className="p-10">
      <div className="grid grid-cols-3 gap-10">
        <div>
          <div>
            <Label htmlFor="kana">ふりがな</Label>
            <Input id="kana" placeholder="やまだたろう" defaultValue="" />
          </div>
          <div>
            <Label htmlFor="name">名前</Label>
            <Input id="name" placeholder="山田太郎" defaultValue="" />
          </div>
        </div>
        <div>
          <div>
            <Label htmlFor="gender">性別</Label>
            <RadioGroup className="flex items-center justify-start space-x-5 mb-4">
              <div>
                <RadioGroupItem value="male" id="male"></RadioGroupItem>
                <Label htmlFor="male">男性</Label>
              </div>
              <div>
                <RadioGroupItem value="female" id="female"></RadioGroupItem>
                <Label htmlFor="female">女性</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="birthdate">誕生日</Label>
            <Input
              id="birthdate"
              placeholder="仮に配置しています"
              defaultValue=""
            />
          </div>
        </div>
        <div>
          <div>
            <Label htmlFor="phone">電話番号</Label>
            <Input id="phone" placeholder="000-000-0000" defaultValue="" />
          </div>
          <div>
            <Label htmlFor="mail">メール</Label>
            <Input id="mail" placeholder="mail@domain" defaultValue="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div>
            <Label htmlFor="postal">郵便番号</Label>
            <Input id="postal" placeholder="000-0000" defaultValue="" />
          </div>
          <div>
            <Label htmlFor="address">住所</Label>
            <Input id="address" placeholder="市町村名" defaultValue="" />
          </div>
        </div>
        <div>
          <Label htmlFor="notes">特記事項</Label>
          <Textarea id="notes" placeholder="" defaultValue="" />
        </div>
      </div>

      <div className="pt-10 flex items-center justify-between">
        <Button type="submit">Save changes</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </div>
    </form>
  );
}
