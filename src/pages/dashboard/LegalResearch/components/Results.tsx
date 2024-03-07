import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: 'Baseset v. Electronic Arts, Inc.',
    subtitle: '93F. Supp. 3d 95 | E.D.N.Y | 2015',
    content:
      'Cillum cupidatat ut dolor commodo ipsum mollit aute pariatur culpa elit fugiat cupidatat magna dolor dolore. Ex deserunt ea aliqua sint eu enim qui sed excepteur proident dolore amet esse commodo eiusmod officia ad ut tempor. Nulla lorem laboris culpa consequat adipiscing sunt consequat laborum esse velit id nisi culpa dolor aliquip. Non ipsum est dolore fugiat velit adipiscing deserunt culpa dolore sint eu sed reprehenderit incididunt reprehenderit in nostrud tempor. Esse exercitation ea consequat cillum dolore minim nostrud dolore sint sit sit anim dolor quis id excepteur aute. Sit est amet amet id esse cillum dolore qui ullamco veniam dolore enim. Ea ut laborum in incididunt ut fugiat excepteur dolore exercitation excepteur cillum aute. Eiusmod magna ex dolor proident ea amet occaecat eiusmod velit sunt cillum ullamco culpa sed dolor adipiscing aliquip commodo. Eu ipsum id ex in adipiscing velit adipiscing ex consequat aute enim deserunt labore consectetur officia ullamco. Amet mollit occaecat sit magna culpa incididunt lorem laborum fugiat. Excepteur commodo quis dolor qui elit fugiat occaecat sint cupidatat voluptate excepteur.',
  },
  {
    id: 2,
    title: 'Baseset v. Electronic Arts, Inc.',
    subtitle: '93F. Supp. 3d 95 | E.D.N.Y | 2015',
    content:
      'Cillum cupidatat ut dolor commodo ipsum mollit aute pariatur culpa elit fugiat cupidatat magna dolor dolore. Ex deserunt ea aliqua sint eu enim qui sed excepteur proident dolore amet esse commodo eiusmod officia ad ut tempor. Nulla lorem laboris culpa consequat adipiscing sunt consequat laborum esse velit id nisi culpa dolor aliquip. Non ipsum est dolore fugiat velit adipiscing deserunt culpa dolore sint eu sed reprehenderit incididunt reprehenderit in nostrud tempor. Esse exercitation ea consequat cillum dolore minim nostrud dolore sint sit sit anim dolor quis id excepteur aute. Sit est amet amet id esse cillum dolore qui ullamco veniam dolore enim. Ea ut laborum in incididunt ut fugiat excepteur dolore exercitation excepteur cillum aute. Eiusmod magna ex dolor proident ea amet occaecat eiusmod velit sunt cillum ullamco culpa sed dolor adipiscing aliquip commodo. Eu ipsum id ex in adipiscing velit adipiscing ex consequat aute enim deserunt labore consectetur officia ullamco. Amet mollit occaecat sit magna culpa incididunt lorem laborum fugiat. Excepteur commodo quis dolor qui elit fugiat occaecat sint cupidatat voluptate excepteur.',
  },
  {
    id: 3,
    title: 'Baseset v. Electronic Arts, Inc.',
    subtitle: '93F. Supp. 3d 95 | E.D.N.Y | 2015',
    content:
      'Cillum cupidatat ut dolor commodo ipsum mollit aute pariatur culpa elit fugiat cupidatat magna dolor dolore. Ex deserunt ea aliqua sint eu enim qui sed excepteur proident dolore amet esse commodo eiusmod officia ad ut tempor. Nulla lorem laboris culpa consequat adipiscing sunt consequat laborum esse velit id nisi culpa dolor aliquip. Non ipsum est dolore fugiat velit adipiscing deserunt culpa dolore sint eu sed reprehenderit incididunt reprehenderit in nostrud tempor. Esse exercitation ea consequat cillum dolore minim nostrud dolore sint sit sit anim dolor quis id excepteur aute. Sit est amet amet id esse cillum dolore qui ullamco veniam dolore enim. Ea ut laborum in incididunt ut fugiat excepteur dolore exercitation excepteur cillum aute. Eiusmod magna ex dolor proident ea amet occaecat eiusmod velit sunt cillum ullamco culpa sed dolor adipiscing aliquip commodo. Eu ipsum id ex in adipiscing velit adipiscing ex consequat aute enim deserunt labore consectetur officia ullamco. Amet mollit occaecat sit magna culpa incididunt lorem laborum fugiat. Excepteur commodo quis dolor qui elit fugiat occaecat sint cupidatat voluptate excepteur.',
  },
  {
    id: 4,
    title: 'Baseset v. Electronic Arts, Inc.',
    subtitle: '93F. Supp. 3d 95 | E.D.N.Y | 2015',
    content:
      'Cillum cupidatat ut dolor commodo ipsum mollit aute pariatur culpa elit fugiat cupidatat magna dolor dolore. Ex deserunt ea aliqua sint eu enim qui sed excepteur proident dolore amet esse commodo eiusmod officia ad ut tempor. Nulla lorem laboris culpa consequat adipiscing sunt consequat laborum esse velit id nisi culpa dolor aliquip. Non ipsum est dolore fugiat velit adipiscing deserunt culpa dolore sint eu sed reprehenderit incididunt reprehenderit in nostrud tempor. Esse exercitation ea consequat cillum dolore minim nostrud dolore sint sit sit anim dolor quis id excepteur aute. Sit est amet amet id esse cillum dolore qui ullamco veniam dolore enim. Ea ut laborum in incididunt ut fugiat excepteur dolore exercitation excepteur cillum aute. Eiusmod magna ex dolor proident ea amet occaecat eiusmod velit sunt cillum ullamco culpa sed dolor adipiscing aliquip commodo. Eu ipsum id ex in adipiscing velit adipiscing ex consequat aute enim deserunt labore consectetur officia ullamco. Amet mollit occaecat sit magna culpa incididunt lorem laborum fugiat. Excepteur commodo quis dolor qui elit fugiat occaecat sint cupidatat voluptate excepteur.',
  },
];

type ResultsProps = {
  searchCases: API.CasesSearchUsingPostResponse[];
};

function Results(props: ResultsProps) {
  const { searchCases } = props;
  return (
    <div className="flex flex-col gap-4 pb-12">
      {searchCases.map((item, id) => {
        return (
          <Card key={id} className="flex flex-col gap-2">
            <CardHeader>
              <CardTitle>
                <Link to={item.source_url} target="_blank">
                  {item.case_name}
                </Link>
              </CardTitle>
              <CardDescription>{item.citation_string}</CardDescription>
            </CardHeader>
            <CardContent>{item.page_content}</CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Results;
