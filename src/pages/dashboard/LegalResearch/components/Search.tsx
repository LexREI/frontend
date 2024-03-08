import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import * as React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useContext } from 'react';
import { DefaultContext } from '@/contexts/default_context';

type SearchProps = {
  onSubmitCasesSearch: (e: any, query: string) => void;
};

function Search(props: SearchProps) {
  const { onSubmitCasesSearch } = props;
  const { fetchLoading } = useContext(DefaultContext);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <form
      className="relative flex items-center gap-2"
      onSubmit={(e) => onSubmitCasesSearch(e, 'what is us law')}
    >
      <MagnifyingGlassIcon className="absolute left-2 h-4 w-4 text-muted-foreground" />
      <Input
        className="pl-8"
        type="text"
        placeholder="clickwrap agreement cases"
      />
      <div className="grid gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                'w-[300px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button variant="outline" size="icon" className="w-32" type="button">
        <FilterListRoundedIcon className="h-4 w-4" />
        <span>Filters</span>
      </Button>
      {/*<Button className="w-56" type="submit" disabled={fetchLoading}>*/}
      {/*  Apply filters*/}
      {/*</Button>*/}
    </form>
  );
}

export default Search;