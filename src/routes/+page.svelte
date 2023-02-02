<script lang="ts">
    interface Definition {
        word: string;
        phonetic: string;
        meanings: [{
            partOfSpeech: string;
            definitions: [{
                definition: string;
            }]
        }]
        sourceUrls: string;
        }

    let searchTerm = '';
    let definitions: Definition[] = [];
  
    const handleSubmit = async (event: SubmitEvent) => {
      event.preventDefault();
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      const data = await response.json();
      definitions = data;
    };
  
    const handleInput = (event: InputEvent) => {
        if (event.target) {
            searchTerm = (event.target as HTMLInputElement).value;
        }
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={searchTerm} on:input={handleInput} />
    <button type="submit">Search</button>
  </form>


  {#if definitions.length}
    {#each definitions as definition}
         <p>{definition.word}</p>
         <p>{definition.phonetic}</p>
         {#each definition.meanings as meanings}
            <p>{meanings.partOfSpeech}</p>
            {#each meanings.definitions as definitions}
                 <p>{definitions.definition}</p>
            {/each}
         {/each}
         <a href="{definition.sourceUrls}">Source</a>
    {/each}
  {:else}
     <p>Try searching.</p>
  {/if}
  
