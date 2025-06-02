import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from 'react-router-dom';

const AssetTable = () => {
  const navigate = useNavigate();

  return (
    <Table className="text-white">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-white">Coin</TableHead>
          <TableHead className="text-white">Symbol</TableHead>
          <TableHead className="text-white">Volume</TableHead>
          <TableHead className="text-white">Market Cap</TableHead>
          <TableHead className="text-white">24Hrs</TableHead>
          <TableHead className="text-right text-white">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow
            key={index}
            onClick={() => navigate('/market/bitcoin')}
            className="cursor-pointer hover:bg-muted/30"
          >
            <TableCell className="font-medium text-white flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://m.media-amazon.com/images/I/61Iw4aixZ1L.jpg" />
              </Avatar>
              <span>Bitcoin</span>
            </TableCell>
            <TableCell className="text-white">BTC</TableCell>
            <TableCell className="text-white">34248249812</TableCell>
            <TableCell className="text-white">2164733087181</TableCell>
            <TableCell className="text-white">-0.09677</TableCell>
            <TableCell className="text-right text-white">$108814</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssetTable;
