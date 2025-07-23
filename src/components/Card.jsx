import React from 'react';

const Card = ({altInside ='Moment name',description,owner,main="Golden Hour" }) => {
    return (
        <div>
            <div class="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-white/20 border border-white/30 p-4">
  <img class="w-full rounded-lg" src="images/your-photo.jpg" alt={altInside} />
  
  <div class="pt-4 text-center text-white">
    <h2 class="text-2xl font-semibold">{main}</h2>
    <p class="text-sm text-white/80 mt-1">{description}</p>
    
        <div class="mt-4 flex items-center justify-center space-x-2">
      <img src="images/profile.jpg" alt="Photographer" class="w-8 h-8 rounded-full border border-white" />
      <span class="text-sm text-white/70">by <span class="font-medium">{owner}</span></span>
        </div>
     </div>
    </div>

</div>
    );
}

export default Card;
