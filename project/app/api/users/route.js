export async function GET(request) {
  const users = [
    { id: 1, name: 'Ronnie' },
    { id: 2, name: 'Johnnie' },
    { id: 3, name: 'Ricky' },
    { id: 4, name: 'Mike' },
  ];
  console.log(users[2].id);
  return new Response(JSON.stringify(users));
}