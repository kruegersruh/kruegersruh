import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import rrulePlugin from '@fullcalendar/rrule'
import deLocale from '@fullcalendar/core/locales/de'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

// https://fullcalendar.io/docs/react
// https://fullcalendar.io/docs/list-view
// https://fullcalendar.io/docs/event-object
// https://fullcalendar.io/docs/rrule-plugin
// https://dateutil.readthedocs.io/en/stable/rrule.html
// https://fullcalendar.io/docs/google-calendar

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ googleCalendarPlugin, rrulePlugin, listPlugin ]}
      googleCalendarApiKey='AIzaSyAdplIqmONF4uGdW8d4ATAoMsfTQYbwYZc'
      initialView='listYear'
      height="auto"
      weekends={true}
      showNonCurrentDates={false}
      locale={deLocale}
      buttonText={{
        month: 'Monat',
        year: 'Jahr'  
      }}
      headerToolbar={{
        left: '',
        center: 'title',
        right: 'listMonth listYear prev,next'
      }}
      listDayFormat={{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        weekday: 'long'
      }}
      listDaySideFormat={false}
      allDayText='ganztägig'
      // The Event URL ends with the Base64 Encoding of the GoogleCalendarId "<id>@g".
      eventSources={[
          {
            // Base64: dm9yc3RhbmRAa3J1ZWdlcnNydWguZGU
            googleCalendarId: 'vorstand@kruegersruh.de',
            className: 'vorstand',
            backgroundColor: '#f70b0b'
          },
          {
            // Base64: ODVmZTVmYmVkNDBjMDUzMDBjYTljNjNhZTgzNjVkMWM4OGZiNGM4MDZjOTFiMDVkNTE3YTIzN2FkMzczMjRjZkBn
            googleCalendarId: '85fe5fbed40c05300ca9c63ae8365d1c88fb4c806c91b05d517a237ad37324cf@group.calendar.google.com',
            className: 'festausschuss',
            backgroundColor: '#f0f70b'
          },
          {
            // Base64: MmM3NDQ4ZTk4YzQ1YjNiYzkyMGFiOTZhNDY0NWIyOThhNDljMmU0ZWEyMDRmMTI0YTcwZTg5ZTZmNjMxOTI4NUBn
            googleCalendarId: '2c7448e98c45b3bc920ab96a4645b298a49c2e4ea204f124a70e89e6f6319285@group.calendar.google.com',
            className: 'gemeinschaftsarbeit',
            backgroundColor: '#124037'
          }
        ]
      }
      eventDataTransform={function (eventData) {
          eventData.url = "/kalender";
          if (eventData.url?.endsWith('dm9yc3RhbmRAa3J1ZWdlcnNydWguZGU')) {
            eventData.url = "/vorstand";
          }
          if (eventData.url?.endsWith('ODVmZTVmYmVkNDBjMDUzMDBjYTljNjNhZTgzNjVkMWM4OGZiNGM4MDZjOTFiMDVkNTE3YTIzN2FkMzczMjRjZkBn')) {
            eventData.url = "/festausschuss";
          }
          if (eventData.url?.endsWith('MmM3NDQ4ZTk4YzQ1YjNiYzkyMGFiOTZhNDY0NWIyOThhNDljMmU0ZWEyMDRmMTI0YTcwZTg5ZTZmNjMxOTI4NUBn')) {
            eventData.url = "/gemeinschaftsarbeit";
          }
        }
      }
      eventClick={function (event) {
        if (event.event.url.includes("google.com") ) {
          event.jsEvent.stopPropagation();
          event.jsEvent.preventDefault();
        }
      }
    }
    />
  )
}




