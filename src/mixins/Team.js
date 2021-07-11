const teamInformation={
    data(){
        return{
            teamInfo:[
                {
                  name:'Man City', 
                  url:'logos/mancity.png', 
                  squad:{
                    goalie:['Ederson', 'Z.Steffen'],
                    defenders:['Rúben Dias', 'Walker', 'Laporte', 'Nathan Aké', 'John Stones', 'Cancelo', 'Luke Mbete', 'Zinchenko'],
                    midfielders :['Rodri', 'Benardo Silva', 'Fernandinho', 'De Bruyne', 'Foden', 'Gundogan', 'Cole Palmer'],
                    forwards:['Kun Auguro', 'G.Jesus', 'Liam Delap', 'Sterling', 'Mahrez', 'Ferran Torres']
                  }
                },
                {
                  name:'Man Utd',
                  url:'logos/manutd.jpg', 
                  squad:{
                    goalie:['Henderson', 'De Gea', 'T. Heaton', 'Lee Grant'],
                    defenders:['H.Maguire', 'V. Lindelof', 'E. Bailly', 'A.Tuanzebe', 'P.Jones', 'A.Wan-Bissaka', 'D.Dalot', 'B.Williams'],
                    midfielders :['Matic', 'P.Pogba', 'Pogba', 'S.McTominay', 'D.Van de Beek', 'Fred', 'B.Fernandes', 'J.Lingard', 'A.Pereira', 'Juan Mata'],
                    forwards:['M.Rashford', 'D.James', 'M Greenwood', 'A.Diallo', 'F.Pellistri', 'T.Chong', 'A.Martial', 'E.Cavani']
                  }
                },
                {
                  name:'Liverpool',
                  url:'logos/liverpool.jpg', 
                  squad:{
                    goalie:['Allison', 'Adrian', 'Hughes', 'Loris Karius'],
                    defenders:['Van Dijk', 'Gomez', 'Robertson', 'Ben Davies', 'Joel Matip', 'Williams', 'Phillips', 'A.Arnold'],
                    midfielders :['Fabinho', 'Thiago', 'James Milner', 'Naby Keita', 'Henderson', 'Chamberlain', 'Jones', 'Xherdan Shaqiri', 'Shey Ojo', 'Harry Wilson', 'Harvey Elliott'],
                    forwards:['Sadio Mane', 'Mo Salah', 'Diego Jota', 'Origi', 'Takumi Minamino']
                  }
                },
                {
                  name:'Chelsea',
                  url:'logos/chelsea.jpg', 
                  squad:{
                    goalie:['Kepa', 'Mendy', 'Ziger', 'J.Cumming'],
                    defenders:['Rudriger', 'Alonso', 'A.Christensen', 'Thiago Silva', 'Zouma', 'Azpillicueta', 'Zappacosta'],
                    midfielders :['Jorginho', 'N\'Golo Kante', 'Pulisic', 'Mateo Kovacic', 'Mason Mount', 'Hakim Ziyech', 'Kai Havertz', 'Lewis Bate', 'Ross Barkley', 'Loftus-Cheek', 'Kenedy', 'Bakayoko'],
                    forwards:['T.Abraham', 'Timo Werner', 'Oliver Giroud', 'Hudson-Odoi', 'Michy Batshuayi']
                  }
                },
                {
                  name:'Leicester City',
                  url:'logos/leicester.png', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'West Ham',
                  url:'logos/westham.jpg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Spurs',
                  url:'logos/spurs.jpg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Arsenal',
                  url:'logos/arsenal.png', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Leeds',
                  url:'logos/leeds.png', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Everton',
                  url:'logos/everton.png', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Aston Villa',
                  url:'logos/astonvilla.png', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Newcastle',
                  url:'logos/newcastle.jpg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Wolves',
                  url:'logos/wolves.png', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Crystal Palace',
                  url:'logos/palace.jpg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Southhampton',
                  url:'logos/southhampton.jpg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Brighton',
                  url:'logos/brighton.jpg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Burnely',
                  url:'logos/burnely.jpeg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Fulham',
                  url:'logos/fulham.jpg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'West Brom',
                  url:'logos/albion.jpg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
                {
                  name:'Sheffield',
                  url:'logos/sheffield.jpg', 
                  squad:{
                    goalie:['Lloris', 'J.Hart', 'Whiteman', 'P.Gazzaniga'],
                    defenders:['S.Reguilón', 'Alderweireld', 'D.Sánchez', 'Joe Rodon', 'Eric Dier', 'Serge Aurier', 'J.Tanganga', 'Ben Davies', 'Danny Rose'],
                    midfielders :['Højbjerg', 'Harry Winks', 'Erik Lamela', 'Moussa Sissoko', 'Dele Alli', 'Lucas Moura', 'Tanguy Ndombele', 'Giovani Lo Celso'],
                    forwards:['Son Heung-min', 'Gareth Bale', 'Harry Kane ', 'Steven Bergwijn', 'Carlos Vinícius']
                  }
                },
              ]
        }
    },
}

export default teamInformation;