<template>
  <div>
    <PCard>
      <provet-stack
        class="n-margin-auto"
        style="width: 340px; text-align: center; display: flex; justify-content: center; align-items: center;"
      >
        <p
          class="n-font-size-l"
          style="display: flex; align-items: center;"
        >
          Thanks a lot for caring!
          <provet-icon
            size="l"
            color=""
            name="generic-feline"
            class="n-color-text-highlight n-margin-i-s"
          />
        </p>
        <nuxt-link :to="{ name: 'index' }">
          <PButton
            :expand="false"
            variant="plain"
          >
            <provet-icon
              slot="start"
              name="arrow-left-long"
            />
            Back
          </PButton>
        </nuxt-link>
      </provet-stack>
    </PCard>
  </div>
</template>
